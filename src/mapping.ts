import { BigInt, Bytes, log } from "@graphprotocol/graph-ts"
import {
  OpenDiamond,
  APRupdated,
  APYupdated,
  CollateralPreClosureFeesUpdated,
  CollateralReleaseFeesUpdated,
  CommitmentAdded,
  DepositPreClosureFeesUpdated,
  DepositWithdrawalFeesUpdated,
  LoanClosureFeesUpdated,
  LoanIssuanceFeesUpdated,
  LoanPreClosureFeesUpdated,
  MarketSwapFeesUpdated,
  MaxWithdrawalUpdated,
  PauseState,
  ReserveFactorUpdated,
  YieldConversionFeesUpdated,
  DepositAdded,
  DepositWithdrawal,
  NewDeposit,
  DiamondCut,
  BorrowInterestUpdated,
  DepositInterestUpdated,
  InterestFactorsUpdated,
  InterestsUpdated,
  TokenSupportAdded,
  TokensIssued,
  Liquidation,
  AddCollateral,
  MarketSwapped,
  WithdrawCollateral,
  WithdrawPartialLoan,
  NewLoan,
  LoanRepaid,
  Market2Added,
  Market2Removed,
  Market2Updated,
  MarketSupportAdded,
  MarketSupportRemoved,
  MarketSupportUpdated,
  SavingsAprAccrued,
  BorrowAprAccrued,
  WithdrawCollateralFee,
  LoanFee,
} from "../generated/OpenDiamond/OpenDiamond"
import { User, Deposit, Reserve, Loan, Collateral, Utilisation } from "../generated/schema"

export function handleAPRupdated(event: APRupdated): void {}

export function handleAPYupdated(event: APYupdated): void {}

export function handleCollateralPreClosureFeesUpdated(
  event: CollateralPreClosureFeesUpdated
): void {}

export function handleCollateralReleaseFeesUpdated(
  event: CollateralReleaseFeesUpdated
): void {}

export function handleCommitmentAdded(event: CommitmentAdded): void {}

export function handleDepositPreClosureFeesUpdated(
  event: DepositPreClosureFeesUpdated
): void {}

export function handleDepositWithdrawalFeesUpdated(
  event: DepositWithdrawalFeesUpdated
): void {}

export function handleLoanClosureFeesUpdated(
  event: LoanClosureFeesUpdated
): void {}

export function handleLoanIssuanceFeesUpdated(
  event: LoanIssuanceFeesUpdated
): void {}

export function handleLoanPreClosureFeesUpdated(
  event: LoanPreClosureFeesUpdated
): void {}

export function handleMarketSwapFeesUpdated(
  event: MarketSwapFeesUpdated
): void {}

export function handleMaxWithdrawalUpdated(event: MaxWithdrawalUpdated): void {}

export function handlePauseState(event: PauseState): void {}

export function handleReserveFactorUpdated(event: ReserveFactorUpdated): void {}

export function handleYieldConversionFeesUpdated(
  event: YieldConversionFeesUpdated
): void {}

export function handleDepositWithdrawal(event: DepositWithdrawal): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.warning(`[handleDepositWithdrawal|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let deposits = user.deposits
  let deposit: Deposit | null
  if (deposits && deposits.length > 0) {
    for(let i=0; i<deposits.length; i++) {
      deposit = Deposit.load(deposits[i])
      if (deposit && deposit.market == event.params.market.toString() && deposit.commitment == event.params.commitment.toString() && deposit.state == 'active') {
        break
      }
    }
  }

  if (!deposit) {
    log.warning(`[handleDepositWithdrawal|${event.transaction.hash.toHexString()}] Deposit not found`, [])
    return
  }

  let timestamp = event.params.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400

  deposit.currentAmount -= event.params.amount
  deposit.feePaid = (deposit.feePaid || BigInt.fromI32(0)) + event.params.fee
  if (deposit.currentAmount == BigInt.fromI32(0)) {
    deposit.state = 'inactive'
  }
  deposit.save()

  let dateEntityId = dayStartTimestamp.toString().concat('-deposit').concat(deposit.market.toString()).concat(deposit.commitment.toString())
  let reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = deposit.market.toString()
    reserve.commitment = deposit.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'deposit'
  }
  reserve.amount -= event.params.amount // this amount is fee deducted
  reserve.save()
}

export function handleSavingsAprAccrued(event: SavingsAprAccrued): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.warning(`[handleSavingsAprAccrued|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let deposits = user.deposits
  let deposit: Deposit | null
  if (deposits && deposits.length > 0) {
    for(let i=0; i<deposits.length; i++) {
      deposit = Deposit.load(deposits[i])!
      if (deposit && deposit.market == event.params.market.toString() && deposit.commitment == event.params.commitment.toString() && deposit.state == 'active') {
        break
      }
    }
  }
  if (!deposit) {
    log.warning(`[handleSavingsAprAccrued|${event.transaction.hash.toHexString()}] Deposit not found`, [])
    return
  }
  deposit.interestAccrued += event.params.accruedInterest
  deposit.save()
}

export function handleNewDeposit(event: NewDeposit): void {
  let userEntityId = event.params.account.toHex()
  let depositEntityId = event.transaction.hash.toHex()
  let timestamp = event.params.time.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400

  let user = User.load(userEntityId)
  if (!user) {
    user = new User(userEntityId)
    user.address = event.params.account
    user.save()
  }

  let deposit = new Deposit(depositEntityId)
  deposit.market = event.params.market.toString()
  deposit.amount = event.params.amount
  deposit.currentAmount = event.params.amount
  deposit.commitment = event.params.commitment.toString()
  deposit.interestAccrued = BigInt.fromI32(0)
  deposit.state = 'active'
  deposit.user = event.params.account.toHexString()
  deposit.createdAt = event.params.time.toI32()
  deposit.updatedAt = event.params.time.toI32()
  deposit.save()

  let userDeposits: string[] = []
  for (let i=0; i<user.deposits.length; i++) {
    userDeposits.push(user.deposits[i]);  
  }
  userDeposits.push(event.transaction.hash.toHexString());
  user.deposits = userDeposits
  user.save()

  let dateEntityId = dayStartTimestamp.toString().concat('-deposit').concat(event.params.market.toString()).concat(event.params.commitment.toString())
  let reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = event.params.market.toString()
    reserve.commitment = event.params.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'deposit'
  }
  reserve.amount += event.params.amount
  reserve.save()
}

export function handleDepositAdded(event: DepositAdded): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.error(`[handleDepositAdded|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let deposits: Array<string>
  let deposit: Deposit | null
  if (user && user.deposits) {
    deposits = user.deposits
  }

  for(let i=0; i<deposits.length; i++) {
    deposit = Deposit.load(deposits[i])
    if (deposit) {
      if (deposit.market == event.params.market.toString() && deposit.commitment == event.params.commitment.toString() && deposit.state == 'active') {
        break
      }
    }
  }

  if (!deposit) {
    log.error(`[handleDepositAdded|${event.transaction.hash.toHexString()}] Deposit not found`, [])
    return
  }

  deposit.currentAmount += event.params.amount
  deposit.updatedAt = event.params.time.toI32()
  deposit.save()

  let timestamp = event.params.time.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dateEntityId = dayStartTimestamp.toString().concat('-deposit').concat(event.params.market.toString()).concat(event.params.commitment.toString())
  let reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = event.params.market.toString()
    reserve.commitment = event.params.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'deposit'
  }
  reserve.amount += event.params.amount
  reserve.save()
}

export function handleBorrowAprAccrued(event: BorrowAprAccrued): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.warning(`[handleBorrowAprAccrued|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let loans = user.loans
  let loan: Loan | null
  if (loans && loans.length > 0) {
    for(let i=0; i<loans.length; i++) {
      loan = Loan.load(loans[i])!
      if (loan && loan.initialMarket == event.params.market.toString() && loan.commitment == event.params.commitment.toString()) {
        break
      }
    }
  }
  if (!loan) {
    log.warning(`[handleBorrowAprAccrued|${event.transaction.hash.toHexString()}] Loan not found`, [])
    return
  }
  loan.interestAccrued += event.params.accruedInterest
  loan.save()
}

export function handleDiamondCut(event: DiamondCut): void {}

export function handleBorrowInterestUpdated(
  event: BorrowInterestUpdated
): void {}

export function handleDepositInterestUpdated(
  event: DepositInterestUpdated
): void {}

export function handleInterestFactorsUpdated(
  event: InterestFactorsUpdated
): void {}

export function handleInterestsUpdated(event: InterestsUpdated): void {}

export function handleTokenSupportAdded(event: TokenSupportAdded): void {}

export function handleTokensIssued(event: TokensIssued): void {}

export function handleLiquidation(event: Liquidation): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.warning(`[handleLiquidation|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let loans = user.loans
  let loan: Loan | null
  if (loans && loans.length > 0) {
    for(let i=0; i<loans.length; i++) {
      loan = Loan.load(loans[i])
      if (loan && loan.initialMarket == event.params.market.toString() && loan.commitment == event.params.commitment.toString() && loan.state.toString() == 'active') {
        break
      }
    }
  }

  if (!loan) {
    log.warning(`[handleLiquidation|${event.transaction.hash.toHexString()}] Loan not found`, [])
    return
  }

  let collateral = Collateral.load(loan.collateral)
  if (!collateral) {
    log.warning(`[handleLiquidation|${event.transaction.hash.toHexString()}] Collateral not found`, [])
    return
  }
  collateral.currentAmount = BigInt.fromI32(0)
  collateral.save()

  //update loan records
  loan.state = 'liquidated'
  loan.currentAmount = BigInt.fromI32(0)
  loan.save()
}

export function handleAddCollateral(event: AddCollateral): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.error(`[handleAddCollateral|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let loans: Array<string>
  let loan: Loan | null
  if (user && user.loans) {
    loans = user.loans
  }

  for(let i=0; i<loans.length; i++) {
    loan = Loan.load(loans[i])
    if (loan) {
      if (loan.initialMarket == event.params.market.toString() && loan.commitment == event.params.commitment.toString() && loan.state.toString() == 'active') {
        break
      }
    }
  }

  if (!loan) {
    log.error(`[handleAddCollateral|${event.transaction.hash.toHexString()}] Loan not found`, [])
    return
  }

  let collateral = Collateral.load(loan.collateral)
  if (!collateral) {
    log.warning(`[handleAddCollateral|${event.transaction.hash.toHexString()}] Collateral not found`, [])
    return
  }
  collateral.currentAmount += event.params.amount
  loan.updatedAt = event.params.timestamp.toI32()
  loan.save()
  collateral.save()

  let timestamp = event.params.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dateEntityId = dayStartTimestamp.toString().concat('-borrow').concat(event.params.market.toString()).concat(event.params.commitment.toString())
  let reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = event.params.market.toString()
    reserve.commitment = event.params.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'borrow'
  }
  reserve.amount += event.params.amount
  reserve.save()
}

export function handleMarketSwapped(event: MarketSwapped): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.warning(`[handleMarketSwapped|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let loans = user.loans
  let loan: Loan | null
  if (loans && loans.length > 0) {
    for(let i=0; i<loans.length; i++) {
      loan = Loan.load(loans[i])
      if (loan && loan.initialMarket == event.params.loanMarket.toString() && loan.commitment == event.params.commitment.toString() && loan.state.toString() == 'active') {
        break
      }
    }
  }

  if (!loan) {
    log.warning(`[handleMarketSwapped|${event.transaction.hash.toHexString()}] Loan not found`, [])
    return
  }

  let timestamp = event.params.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dateEntityId = dayStartTimestamp.toString().concat('-borrow').concat(loan.currentMarket.toString()).concat(loan.commitment.toString())

  // deduct reserves for loan current market
  let reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = loan.currentMarket.toString()
    reserve.commitment = loan.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'borrow'
  }
  reserve.amount -= loan.currentAmount
  reserve.save()

  loan.currentAmount = event.params.amount
  loan.currentMarket = event.params.currentMarket.toString()
  loan.isSwapped = event.params.isSwapped
  loan.save()

  // increase reserves for updated loan current market
  dateEntityId = dayStartTimestamp.toString().concat('-borrow').concat(loan.currentMarket.toString()).concat(loan.commitment.toString())
  reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = loan.currentMarket.toString()
    reserve.commitment = loan.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'borrow'
  }
  reserve.amount += loan.currentAmount
  reserve.save()
}

export function handleWithdrawCollateral(event: WithdrawCollateral): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.error(`[handleWithdrawCollateral|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let loans: Array<string>
  let loan: Loan | null
  if (user && user.loans) {
    loans = user.loans
  }

  for(let i=0; i<loans.length; i++) {
    loan = Loan.load(loans[i])
    if (loan) {
      if (loan.initialMarket == event.params.market.toString() && loan.commitment == event.params.commitment.toString() && loan.state.toString() == 'active') {
        break
      }
    }
  }

  if (!loan) {
    log.error(`[handleWithdrawCollateral|${event.transaction.hash.toHexString()}] Loan not found`, [])
    return
  }

  let collateral = Collateral.load(loan.collateral)
  if (!collateral) {
    log.warning(`[handleWithdrawCollateral|${event.transaction.hash.toHexString()}] Collateral not found`, [])
    return
  }
  collateral.currentAmount -= event.params.amount
  loan.updatedAt = event.params.timestamp.toI32()
  loan.save()
  collateral.save()

  let timestamp = event.params.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dateEntityId = dayStartTimestamp.toString().concat('-borrow').concat(event.params.market.toString()).concat(event.params.commitment.toString())
  let reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = event.params.market.toString()
    reserve.commitment = event.params.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'borrow'
  }
  reserve.amount -= event.params.amount
  reserve.save()
}

export function handleWithdrawPartialLoan(event: WithdrawPartialLoan): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.warning(`[handleWithdrawPartialLoan|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let loans = user.loans
  let loan: Loan | null
  if (loans && loans.length > 0) {
    for(let i=0; i<loans.length; i++) {
      loan = Loan.load(loans[i])
      if (loan && loan.initialMarket == event.params.market.toString() && loan.commitment == event.params.commitment.toString() && loan.state == 'active') {
        break
      }
    }
  }

  if (!loan) {
    log.warning(`[handleWithdrawPartialLoan|${event.transaction.hash.toHexString()}] Loan not found`, [])
    return
  }

  loan.currentAmount -= event.params.amount
  loan.save()

  let timestamp = event.params.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dateEntityId = dayStartTimestamp.toString().concat('-borrow').concat(loan.initialMarket.toString()).concat(loan.commitment.toString())

  let reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = loan.initialMarket.toString()
    reserve.commitment = loan.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'borrow'
  }
  reserve.amount -= event.params.amount
  reserve.save()
}

export function handleNewLoan(event: NewLoan): void {
  let userEntityId = event.params.account.toHex()
  let entityId = event.transaction.hash.toHex()
  let timestamp = event.params.time.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400

  let user = User.load(userEntityId)
  if (!user) {
    user = new User(userEntityId)
    user.address = event.params.account
    user.save()
  }

  let collateral = new Collateral(entityId)
  collateral.market = event.params.collateralMarket.toString()
  collateral.initialAmount = event.params.collateralAmount
  collateral.currentAmount = event.params.collateralAmount
  collateral.loan = event.transaction.hash.toHexString()

  let loan = new Loan(entityId)
  loan.initialMarket = event.params.loanMarket.toString()
  loan.initialAmount = event.params.initialLoanAmount
  loan.commitment = event.params.commitment.toString()
  loan.currentMarket = event.params.loanMarket.toString()
  loan.currentAmount = event.params.loanAmount
  loan.isSwapped = false
  loan.state = 'active'
  loan.feePaid = event.params.initialLoanAmount - event.params.loanAmount
  loan.interestAccrued = BigInt.fromI32(0)
  loan.collateral = event.transaction.hash.toHexString()
  loan.user = event.params.account.toHexString()
  loan.createdAt = event.params.time.toI32()
  loan.updatedAt = event.params.time.toI32()
  collateral.save()
  loan.save()

  let userLoans: string[] = []
  for (let i=0; i<user.loans.length; i++) {
    userLoans.push(user.loans[i]);  
  }
  userLoans.push(event.transaction.hash.toHexString());
  user.loans = userLoans
  user.save()

  let dateEntityId = dayStartTimestamp.toString().concat('-borrow').concat(event.params.loanMarket.toString()).concat(event.params.commitment.toString())
  let reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = event.params.collateralMarket.toString()
    reserve.commitment = event.params.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'borrow'
  }
  reserve.amount += event.params.collateralAmount
  reserve.save()

  let utilisation = Utilisation.load(dateEntityId);
  if (!utilisation) {
    utilisation = new Utilisation(dateEntityId)
    utilisation.market = event.params.loanMarket.toString()
    utilisation.commitment = event.params.commitment.toString()
    utilisation.date = dayStartTimestamp
  }
  utilisation.amount += event.params.loanAmount
  utilisation.save()
}

export function handleWithdrawCollateralFee(event: WithdrawCollateralFee): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.warning(`[handleWithdrawCollateralFee|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let loans = user.loans
  let loan: Loan | null
  if (loans && loans.length > 0) {
    for(let i=0; i<loans.length; i++) {
      loan = Loan.load(loans[i])
      if (loan && loan.initialMarket == event.params.market.toString() && loan.commitment == event.params.commitment.toString() && loan.state == 'active') {
        break
      }
    }
  }

  if (!loan) {
    log.warning(`[handleWithdrawCollateralFee|${event.transaction.hash.toHexString()}] Loan not found`, [])
    return
  }

  let collateral = Collateral.load(loan.collateral)
  if (!collateral) {
    log.warning(`[handleWithdrawCollateralFee|${event.transaction.hash.toHexString()}] Collateral not found`, [])
    return
  }
  collateral.feePaid = (collateral.feePaid || BigInt.fromI32(0)) + event.params.fee
  collateral.save()
}

export function handleLoanFee(event: LoanFee): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.warning(`[handleLoanFee|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let loans = user.loans
  let loan: Loan | null
  if (loans && loans.length > 0) {
    for(let i=0; i<loans.length; i++) {
      loan = Loan.load(loans[i])
      if (loan && loan.initialMarket == event.params.market.toString() && loan.commitment == event.params.commitment.toString() && loan.state == 'active') {
        break
      }
    }
  }

  if (!loan) {
    log.warning(`[handleLoanFee|${event.transaction.hash.toHexString()}] Loan not found`, [])
    return
  }

  loan.feePaid = (loan.feePaid || BigInt.fromI32(0)) + event.params.fee
  loan.save()
}

export function handleLoanRepaid(event: LoanRepaid): void {
  let user = User.load(event.params.account.toHex())
  if (!user) {
    log.warning(`[handleLoanRepaid|${event.transaction.hash.toHexString()}] User not found`, [])
    return
  }
  let loans = user.loans
  let loan: Loan | null
  if (loans && loans.length > 0) {
    for(let i=0; i<loans.length; i++) {
      loan = Loan.load(loans[i])
      if (loan){
        if (loan.initialMarket == event.params.market.toString() && loan.commitment == event.params.commitment.toString() && loan.state == 'active') {
          break
        }
      } else {
        log.warning(`[handleLoanRepaid|${event.transaction.hash.toHexString()}] Loan not found`, [])
      }
    }
  }

  if (!loan) {
    log.warning(`[handleLoanRepaid|${event.transaction.hash.toHexString()}] Loan not found`, [])
    return
  }

  let timestamp = event.params.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dateEntityId = dayStartTimestamp.toString().concat('-borrow').concat(event.params.market.toString()).concat(event.params.commitment.toString())
  // adding repaid amount in loan market
  let reserve = Reserve.load(dateEntityId);
  if (!reserve) {
    reserve = new Reserve(dateEntityId)
    reserve.market = event.params.market.toString()
    reserve.commitment = event.params.commitment.toString()
    reserve.date = dayStartTimestamp
    reserve.instrumentType = 'borrow'
  }
  reserve.amount += event.params.repaidAmount
  reserve.save()

  if (loan.commitment == 'comit_NONE') {
    // deducting remnant amount in collateral market for flexible loan
    let collateral = Collateral.load(loan.collateral)
    if (!collateral) {
      log.warning(`[handleLoanRepaid|${event.transaction.hash.toHexString()}] Collateral not found`, [])
      return
    }
    let dateEntityId = dayStartTimestamp.toString().concat('-borrow').concat(collateral.market.toString()).concat(event.params.commitment.toString())
    let reserve = Reserve.load(dateEntityId);
    if (!reserve) {
      reserve = new Reserve(dateEntityId)
      reserve.market = collateral.market.toString()
      reserve.commitment = event.params.commitment.toString()
      reserve.date = dayStartTimestamp
      reserve.instrumentType = 'borrow'
    }
    reserve.amount -= event.params.amount
    reserve.save()

    collateral.currentAmount = BigInt.fromI32(0)
    collateral.save()
  }

  //update loan records
  loan.state = 'repaid'
  loan.currentAmount = BigInt.fromI32(0)
  loan.save()
}

export function handleMarket2Added(event: Market2Added): void {}

export function handleMarket2Removed(event: Market2Removed): void {}

export function handleMarket2Updated(event: Market2Updated): void {}

export function handleMarketSupportAdded(event: MarketSupportAdded): void {}

export function handleMarketSupportRemoved(event: MarketSupportRemoved): void {}

export function handleMarketSupportUpdated(event: MarketSupportUpdated): void {}
