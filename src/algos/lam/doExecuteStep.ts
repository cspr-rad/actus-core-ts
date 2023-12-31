/**
 *  N.B. Auto-generated using actus-mp
 */

import { Event } from '../../types/core';
import { LinearAmortizerTermset as Termset } from '../../types/terms';

/**
 *  Applies a set of contract events to the current financial contract state.
 *  
 *  @param events - list of contract events that should be applied in time sequence.
 *  @param terms - contract term set.
 *  @param events - observer for external events & data.
 *  @returns - evaluated events and post-event contract states.
 *  
 */
export const executeStep = (events: Array<Event>, terms: Termset, observer: object): Array<Event> => {
    throw new Error("TODO: implement");
};
