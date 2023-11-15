/**
 *  N.B. Auto-generated using actus-mp
 */

/**
 *  CETC :: Credit Event Type Covered.
 *
 *  The type of credit events covered e.g. in credit enhancement or credit default swap contracts. Only the defined credit event types may trigger the protection.
 */
export enum CreditEventTypeCovered {
    // Delayed: Delay of the underlying represents a credit event.
    DL = 0,

    // Delinquent: Delinquency of the underlying represents a credit event.
    DQ = 1,

    // Default: Default of the underlying represents a credit event.
    DF = 2,
}
