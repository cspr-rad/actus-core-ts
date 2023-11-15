import { StateSpace } from './states';

/**
 *
 *  A payoff function used during event sequence derivation.
 *
 */
export type PayoffFunction = (
    time: Date,
    states: number,
    terms: number,
    riskFactorModel: number,
    dayCounter: number,
    timeAdjuster: number,
    ) => StateSpace;

/**
 *
 *  A state transition function used during event sequence derivation.
 *
 */
export type StateTransitionFunction = (
    time: Date,
    states: number,
    terms: number,
    riskFactorModel: number,
    dayCounter: number,
    timeAdjuster: number,
    ) => StateSpace;
