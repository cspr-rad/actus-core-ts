/**
 *  N.B. Auto-generated using actus-mp
 */

import { Event } from '../../types/core';
import { CommodityTermset as Termset } from '../../types/terms';

/**
 *  Evaluates next contract event sequence within a certain time period.
 *  
 *  The set of contract attributes are mapped to the stream of next contract events
 *  within a specified time period according to the legal logic of the respective
 *  Contract Type and contingent to the risk factor dynamics provided with the
 *  risk factor model.  The contract's status date is used as the reference time
 *  as from which the code period is evaluated.
 *
 *  Note, the stream of the next non-contingent contract events matches the portion
 *  of the stream of the next contingent events up to the first contingent event.
 *  Furthermore, for a contract with purely non-contingent events
 *  (e.g. a PrincipalAtMaturity without a RateReset, Scaling, CreditDefault, etc.)
 *  contingent and non-contingent event streams are the same.
 *  
 *  @param toDate - list of contract events that should be applied in time sequence.
 *  @param terms - contract term set.
 *  @returns - an event sequence upto to_date.
 *  
 */
export const getSchedule = (toDate: Date, terms: Termset): Array<Event> => {
    throw new Error("TODO: implement");
};
