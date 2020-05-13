/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface FiatTokenProxyContract
  extends Truffle.Contract<FiatTokenProxyInstance> {
  "new"(
    _implementation: string,
    meta?: Truffle.TransactionDetails
  ): Promise<FiatTokenProxyInstance>;
}

export interface AdminChanged {
  name: "AdminChanged";
  args: {
    previousAdmin: string;
    newAdmin: string;
    0: string;
    1: string;
  };
}

export interface Upgraded {
  name: "Upgraded";
  args: {
    implementation: string;
    0: string;
  };
}

type AllEvents = AdminChanged | Upgraded;

export interface FiatTokenProxyInstance extends Truffle.ContractInstance {
  /**
   * Upgrade the backing implementation of the proxy. Only the admin can call this function.
   * @param newImplementation Address of the new implementation.
   */
  upgradeTo: {
    (
      newImplementation: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newImplementation: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newImplementation: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newImplementation: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Upgrade the backing implementation of the proxy and call a function on the new implementation. This is useful to initialize the proxied contract.
   * @param data Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/develop/abi-spec.html#function-selector-and-argument-encoding.
   * @param newImplementation Address of the new implementation.
   */
  upgradeToAndCall: {
    (
      newImplementation: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newImplementation: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newImplementation: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newImplementation: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * @returns The address of the implementation.
   */
  implementation(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Changes the admin of the proxy. Only the current admin can call this function.
   * @param newAdmin Address to transfer proxy administration to.
   */
  changeAdmin: {
    (newAdmin: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newAdmin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newAdmin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newAdmin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * @returns The address of the proxy admin.
   */
  admin(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    /**
     * Upgrade the backing implementation of the proxy. Only the admin can call this function.
     * @param newImplementation Address of the new implementation.
     */
    upgradeTo: {
      (
        newImplementation: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newImplementation: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newImplementation: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newImplementation: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Upgrade the backing implementation of the proxy and call a function on the new implementation. This is useful to initialize the proxied contract.
     * @param data Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/develop/abi-spec.html#function-selector-and-argument-encoding.
     * @param newImplementation Address of the new implementation.
     */
    upgradeToAndCall: {
      (
        newImplementation: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newImplementation: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newImplementation: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newImplementation: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * @returns The address of the implementation.
     */
    implementation(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Changes the admin of the proxy. Only the current admin can call this function.
     * @param newAdmin Address to transfer proxy administration to.
     */
    changeAdmin: {
      (newAdmin: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newAdmin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newAdmin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newAdmin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * @returns The address of the proxy admin.
     */
    admin(txDetails?: Truffle.TransactionDetails): Promise<string>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
