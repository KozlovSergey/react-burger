import {
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_GET_MESSAGE
} from '../constants';

import { TOrder } from '../types/data';

export interface IWsUserConnectionStart {
  readonly type: typeof WS_USER_CONNECTION_START
}

export interface IWsUserConnectionSuccess {
  readonly type: typeof WS_USER_CONNECTION_SUCCESS
}

export interface IWsUserConnectionClosed {
  readonly type: typeof WS_USER_CONNECTION_CLOSED
}

export interface IWsUserConnectionError {
  readonly type: typeof WS_USER_CONNECTION_ERROR
}

export interface IWsUserGetMessage {
  readonly type: typeof WS_USER_GET_MESSAGE
  readonly orders: TOrder[]
}

export const wsUserConnectionStart = (): IWsUserConnectionStart => ({
  type: WS_USER_CONNECTION_START
})

export const wsUserConnectionSuccess = (): IWsUserConnectionSuccess => ({
  type: WS_USER_CONNECTION_SUCCESS
})

export const wsUserConnectionClosed = (): IWsUserConnectionClosed => ({
  type: WS_USER_CONNECTION_CLOSED
})

export const wsUserConnectionError = (): IWsUserConnectionError => ({
  type: WS_USER_CONNECTION_ERROR
})

export const wsUserGetMessage = (orders: TOrder[]): IWsUserGetMessage => ({
  type: WS_USER_GET_MESSAGE,
  orders: orders
})

export type TWsUserActions =
  | IWsUserConnectionStart
  | IWsUserConnectionSuccess
  | IWsUserConnectionClosed
  | IWsUserConnectionError
  | IWsUserGetMessage;