// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class APRupdated extends ethereum.Event {
  get params(): APRupdated__Params {
    return new APRupdated__Params(this);
  }
}

export class APRupdated__Params {
  _event: APRupdated;

  constructor(event: APRupdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAPR(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class APYupdated extends ethereum.Event {
  get params(): APYupdated__Params {
    return new APYupdated__Params(this);
  }
}

export class APYupdated__Params {
  _event: APYupdated;

  constructor(event: APYupdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAPY(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CollateralPreClosureFeesUpdated extends ethereum.Event {
  get params(): CollateralPreClosureFeesUpdated__Params {
    return new CollateralPreClosureFeesUpdated__Params(this);
  }
}

export class CollateralPreClosureFeesUpdated__Params {
  _event: CollateralPreClosureFeesUpdated;

  constructor(event: CollateralPreClosureFeesUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFees(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CollateralReleaseFeesUpdated extends ethereum.Event {
  get params(): CollateralReleaseFeesUpdated__Params {
    return new CollateralReleaseFeesUpdated__Params(this);
  }
}

export class CollateralReleaseFeesUpdated__Params {
  _event: CollateralReleaseFeesUpdated;

  constructor(event: CollateralReleaseFeesUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFees(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CommitmentAdded extends ethereum.Event {
  get params(): CommitmentAdded__Params {
    return new CommitmentAdded__Params(this);
  }
}

export class CommitmentAdded__Params {
  _event: CommitmentAdded;

  constructor(event: CommitmentAdded) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _commitment(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get _days(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DepositPreClosureFeesUpdated extends ethereum.Event {
  get params(): DepositPreClosureFeesUpdated__Params {
    return new DepositPreClosureFeesUpdated__Params(this);
  }
}

export class DepositPreClosureFeesUpdated__Params {
  _event: DepositPreClosureFeesUpdated;

  constructor(event: DepositPreClosureFeesUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFees(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DepositWithdrawalFeesUpdated extends ethereum.Event {
  get params(): DepositWithdrawalFeesUpdated__Params {
    return new DepositWithdrawalFeesUpdated__Params(this);
  }
}

export class DepositWithdrawalFeesUpdated__Params {
  _event: DepositWithdrawalFeesUpdated;

  constructor(event: DepositWithdrawalFeesUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFees(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LoanClosureFeesUpdated extends ethereum.Event {
  get params(): LoanClosureFeesUpdated__Params {
    return new LoanClosureFeesUpdated__Params(this);
  }
}

export class LoanClosureFeesUpdated__Params {
  _event: LoanClosureFeesUpdated;

  constructor(event: LoanClosureFeesUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFees(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LoanIssuanceFeesUpdated extends ethereum.Event {
  get params(): LoanIssuanceFeesUpdated__Params {
    return new LoanIssuanceFeesUpdated__Params(this);
  }
}

export class LoanIssuanceFeesUpdated__Params {
  _event: LoanIssuanceFeesUpdated;

  constructor(event: LoanIssuanceFeesUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFees(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LoanPreClosureFeesUpdated extends ethereum.Event {
  get params(): LoanPreClosureFeesUpdated__Params {
    return new LoanPreClosureFeesUpdated__Params(this);
  }
}

export class LoanPreClosureFeesUpdated__Params {
  _event: LoanPreClosureFeesUpdated;

  constructor(event: LoanPreClosureFeesUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFees(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MarketSwapFeesUpdated extends ethereum.Event {
  get params(): MarketSwapFeesUpdated__Params {
    return new MarketSwapFeesUpdated__Params(this);
  }
}

export class MarketSwapFeesUpdated__Params {
  _event: MarketSwapFeesUpdated;

  constructor(event: MarketSwapFeesUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFees(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MaxWithdrawalUpdated extends ethereum.Event {
  get params(): MaxWithdrawalUpdated__Params {
    return new MaxWithdrawalUpdated__Params(this);
  }
}

export class MaxWithdrawalUpdated__Params {
  _event: MaxWithdrawalUpdated;

  constructor(event: MaxWithdrawalUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newFactor(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newBlockLimit(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get oldFactor(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get oldBlockLimit(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class PauseState extends ethereum.Event {
  get params(): PauseState__Params {
    return new PauseState__Params(this);
  }
}

export class PauseState__Params {
  _event: PauseState;

  constructor(event: PauseState) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class ReserveFactorUpdated extends ethereum.Event {
  get params(): ReserveFactorUpdated__Params {
    return new ReserveFactorUpdated__Params(this);
  }
}

export class ReserveFactorUpdated__Params {
  _event: ReserveFactorUpdated;

  constructor(event: ReserveFactorUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldReserveFactor(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newReserveFactor(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class YieldConversionFeesUpdated extends ethereum.Event {
  get params(): YieldConversionFeesUpdated__Params {
    return new YieldConversionFeesUpdated__Params(this);
  }
}

export class YieldConversionFeesUpdated__Params {
  _event: YieldConversionFeesUpdated;

  constructor(event: YieldConversionFeesUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFees(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DepositAdded extends ethereum.Event {
  get params(): DepositAdded__Params {
    return new DepositAdded__Params(this);
  }
}

export class DepositAdded__Params {
  _event: DepositAdded;

  constructor(event: DepositAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get depositId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class DepositWithdrawal extends ethereum.Event {
  get params(): DepositWithdrawal__Params {
    return new DepositWithdrawal__Params(this);
  }
}

export class DepositWithdrawal__Params {
  _event: DepositWithdrawal;

  constructor(event: DepositWithdrawal) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get depositId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get fee(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class NewDeposit extends ethereum.Event {
  get params(): NewDeposit__Params {
    return new NewDeposit__Params(this);
  }
}

export class NewDeposit__Params {
  _event: NewDeposit;

  constructor(event: NewDeposit) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get depositId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class PauseState1 extends ethereum.Event {
  get params(): PauseState1__Params {
    return new PauseState1__Params(this);
  }
}

export class PauseState1__Params {
  _event: PauseState1;

  constructor(event: PauseState1) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class SavingsAprAccrued extends ethereum.Event {
  get params(): SavingsAprAccrued__Params {
    return new SavingsAprAccrued__Params(this);
  }
}

export class SavingsAprAccrued__Params {
  _event: SavingsAprAccrued;

  constructor(event: SavingsAprAccrued) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get depositId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get accruedInterest(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class DiamondCut extends ethereum.Event {
  get params(): DiamondCut__Params {
    return new DiamondCut__Params(this);
  }
}

export class DiamondCut__Params {
  _event: DiamondCut;

  constructor(event: DiamondCut) {
    this._event = event;
  }

  get _diamondCut(): Array<DiamondCut_diamondCutStruct> {
    return this._event.parameters[0].value.toTupleArray<
      DiamondCut_diamondCutStruct
    >();
  }

  get _init(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _calldata(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class DiamondCut_diamondCutStruct extends ethereum.Tuple {
  get facetAddress(): Address {
    return this[0].toAddress();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get functionSelectors(): Array<Bytes> {
    return this[2].toBytesArray();
  }

  get facetId(): i32 {
    return this[3].toI32();
  }
}

export class PauseState2 extends ethereum.Event {
  get params(): PauseState2__Params {
    return new PauseState2__Params(this);
  }
}

export class PauseState2__Params {
  _event: PauseState2;

  constructor(event: PauseState2) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class BorrowInterestUpdated extends ethereum.Event {
  get params(): BorrowInterestUpdated__Params {
    return new BorrowInterestUpdated__Params(this);
  }
}

export class BorrowInterestUpdated__Params {
  _event: BorrowInterestUpdated;

  constructor(event: BorrowInterestUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get minBorrowInterest(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get maxBorrowInterest(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DepositInterestUpdated extends ethereum.Event {
  get params(): DepositInterestUpdated__Params {
    return new DepositInterestUpdated__Params(this);
  }
}

export class DepositInterestUpdated__Params {
  _event: DepositInterestUpdated;

  constructor(event: DepositInterestUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get minDepositInterest(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get maxDepositInterest(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class InterestFactorsUpdated extends ethereum.Event {
  get params(): InterestFactorsUpdated__Params {
    return new InterestFactorsUpdated__Params(this);
  }
}

export class InterestFactorsUpdated__Params {
  _event: InterestFactorsUpdated;

  constructor(event: InterestFactorsUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get factor(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get correlationFactor(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class InterestsUpdated extends ethereum.Event {
  get params(): InterestsUpdated__Params {
    return new InterestsUpdated__Params(this);
  }
}

export class InterestsUpdated__Params {
  _event: InterestsUpdated;

  constructor(event: InterestsUpdated) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PauseState3 extends ethereum.Event {
  get params(): PauseState3__Params {
    return new PauseState3__Params(this);
  }
}

export class PauseState3__Params {
  _event: PauseState3;

  constructor(event: PauseState3) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class TokenSupportAdded extends ethereum.Event {
  get params(): TokenSupportAdded__Params {
    return new TokenSupportAdded__Params(this);
  }
}

export class TokenSupportAdded__Params {
  _event: TokenSupportAdded;

  constructor(event: TokenSupportAdded) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class TokensIssued extends ethereum.Event {
  get params(): TokensIssued__Params {
    return new TokensIssued__Params(this);
  }
}

export class TokensIssued__Params {
  _event: TokensIssued;

  constructor(event: TokensIssued) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DiamondCut1 extends ethereum.Event {
  get params(): DiamondCut1__Params {
    return new DiamondCut1__Params(this);
  }
}

export class DiamondCut1__Params {
  _event: DiamondCut1;

  constructor(event: DiamondCut1) {
    this._event = event;
  }

  get _diamondCut(): Array<DiamondCut1_diamondCutStruct> {
    return this._event.parameters[0].value.toTupleArray<
      DiamondCut1_diamondCutStruct
    >();
  }

  get _init(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _calldata(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class DiamondCut1_diamondCutStruct extends ethereum.Tuple {
  get facetAddress(): Address {
    return this[0].toAddress();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get functionSelectors(): Array<Bytes> {
    return this[2].toBytesArray();
  }

  get facetId(): i32 {
    return this[3].toI32();
  }
}

export class Liquidation extends ethereum.Event {
  get params(): Liquidation__Params {
    return new Liquidation__Params(this);
  }
}

export class Liquidation__Params {
  _event: Liquidation;

  constructor(event: Liquidation) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class PauseState4 extends ethereum.Event {
  get params(): PauseState4__Params {
    return new PauseState4__Params(this);
  }
}

export class PauseState4__Params {
  _event: PauseState4;

  constructor(event: PauseState4) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class AddCollateral extends ethereum.Event {
  get params(): AddCollateral__Params {
    return new AddCollateral__Params(this);
  }
}

export class AddCollateral__Params {
  _event: AddCollateral;

  constructor(event: AddCollateral) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class MarketSwapped extends ethereum.Event {
  get params(): MarketSwapped__Params {
    return new MarketSwapped__Params(this);
  }
}

export class MarketSwapped__Params {
  _event: MarketSwapped;

  constructor(event: MarketSwapped) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get loanMarket(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get isSwapped(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get currentMarket(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class PauseState5 extends ethereum.Event {
  get params(): PauseState5__Params {
    return new PauseState5__Params(this);
  }
}

export class PauseState5__Params {
  _event: PauseState5;

  constructor(event: PauseState5) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class WithdrawCollateral extends ethereum.Event {
  get params(): WithdrawCollateral__Params {
    return new WithdrawCollateral__Params(this);
  }
}

export class WithdrawCollateral__Params {
  _event: WithdrawCollateral;

  constructor(event: WithdrawCollateral) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class WithdrawPartialLoan extends ethereum.Event {
  get params(): WithdrawPartialLoan__Params {
    return new WithdrawPartialLoan__Params(this);
  }
}

export class WithdrawPartialLoan__Params {
  _event: WithdrawPartialLoan;

  constructor(event: WithdrawPartialLoan) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get market(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class NewLoan extends ethereum.Event {
  get params(): NewLoan__Params {
    return new NewLoan__Params(this);
  }
}

export class NewLoan__Params {
  _event: NewLoan;

  constructor(event: NewLoan) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get loanMarket(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get loanAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get collateralMarket(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get collateralAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get loanId(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get initialLoanAmount(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class PauseState6 extends ethereum.Event {
  get params(): PauseState6__Params {
    return new PauseState6__Params(this);
  }
}

export class PauseState6__Params {
  _event: PauseState6;

  constructor(event: PauseState6) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class LoanRepaid extends ethereum.Event {
  get params(): LoanRepaid__Params {
    return new LoanRepaid__Params(this);
  }
}

export class LoanRepaid__Params {
  _event: LoanRepaid;

  constructor(event: LoanRepaid) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get market(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get repaidAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class PauseState7 extends ethereum.Event {
  get params(): PauseState7__Params {
    return new PauseState7__Params(this);
  }
}

export class PauseState7__Params {
  _event: PauseState7;

  constructor(event: PauseState7) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class PauseState8 extends ethereum.Event {
  get params(): PauseState8__Params {
    return new PauseState8__Params(this);
  }
}

export class PauseState8__Params {
  _event: PauseState8;

  constructor(event: PauseState8) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class PauseState9 extends ethereum.Event {
  get params(): PauseState9__Params {
    return new PauseState9__Params(this);
  }
}

export class PauseState9__Params {
  _event: PauseState9;

  constructor(event: PauseState9) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Market2Added extends ethereum.Event {
  get params(): Market2Added__Params {
    return new Market2Added__Params(this);
  }
}

export class Market2Added__Params {
  _event: Market2Added;

  constructor(event: Market2Added) {
    this._event = event;
  }

  get _market(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _decimals(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _marketAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Market2Removed extends ethereum.Event {
  get params(): Market2Removed__Params {
    return new Market2Removed__Params(this);
  }
}

export class Market2Removed__Params {
  _event: Market2Removed;

  constructor(event: Market2Removed) {
    this._event = event;
  }

  get _market(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Market2Updated extends ethereum.Event {
  get params(): Market2Updated__Params {
    return new Market2Updated__Params(this);
  }
}

export class Market2Updated__Params {
  _event: Market2Updated;

  constructor(event: Market2Updated) {
    this._event = event;
  }

  get _market(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _decimals(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _tokenAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MarketSupportAdded extends ethereum.Event {
  get params(): MarketSupportAdded__Params {
    return new MarketSupportAdded__Params(this);
  }
}

export class MarketSupportAdded__Params {
  _event: MarketSupportAdded;

  constructor(event: MarketSupportAdded) {
    this._event = event;
  }

  get _market(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _decimals(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get MarketAddress_(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MarketSupportRemoved extends ethereum.Event {
  get params(): MarketSupportRemoved__Params {
    return new MarketSupportRemoved__Params(this);
  }
}

export class MarketSupportRemoved__Params {
  _event: MarketSupportRemoved;

  constructor(event: MarketSupportRemoved) {
    this._event = event;
  }

  get _market(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MarketSupportUpdated extends ethereum.Event {
  get params(): MarketSupportUpdated__Params {
    return new MarketSupportUpdated__Params(this);
  }
}

export class MarketSupportUpdated__Params {
  _event: MarketSupportUpdated;

  constructor(event: MarketSupportUpdated) {
    this._event = event;
  }

  get _market(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _decimals(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get MarketAddress_(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class PauseState10 extends ethereum.Event {
  get params(): PauseState10__Params {
    return new PauseState10__Params(this);
  }
}

export class PauseState10__Params {
  _event: PauseState10;

  constructor(event: PauseState10) {
    this._event = event;
  }

  get _pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isPaused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class BorrowAprAccrued extends ethereum.Event {
  get params(): BorrowAprAccrued__Params {
    return new BorrowAprAccrued__Params(this);
  }
}

export class BorrowAprAccrued__Params {
  _event: BorrowAprAccrued;

  constructor(event: BorrowAprAccrued) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get loanId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get accruedInterest(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class WithdrawCollateralFee extends ethereum.Event {
  get params(): WithdrawCollateralFee__Params {
    return new WithdrawCollateralFee__Params(this);
  }
}

export class WithdrawCollateralFee__Params {
  _event: WithdrawCollateralFee;

  constructor(event: WithdrawCollateralFee) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get fee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LoanFee extends ethereum.Event {
  get params(): LoanFee__Params {
    return new LoanFee__Params(this);
  }
}

export class LoanFee__Params {
  _event: LoanFee;

  constructor(event: LoanFee) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get market(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get commitment(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get fee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class OpenDiamond extends ethereum.SmartContract {
  static bind(address: Address): OpenDiamond {
    return new OpenDiamond("OpenDiamond", address);
  }
}
