/**
 *  N.B. Auto-generated using actus-mp
 */

/**
 *  DS :: Delivery Settlement.
 *
 *  Indicates whether the contract is settled in cash or physical delivery.In case of physical delivery, the underlying contract and associated (future) cash flows are effectively exchanged. In case of cash settlement, the current market value of the underlying contract determines the cash flow exchanged.
 */
export enum DeliverySettlement {
    // Cash Settlement: The market value of the underlying is settled.
    S = 0,

    // Physical Settlement: The underlying is delivered physically.
    D = 1,
}
