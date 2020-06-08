import { IAddress } from "./iaddress";

export interface IRepresentative {
  id: number,
  name: string,
  photoUrl: string,
  party: string,
  address: IAddress,
  phones: [ string ],
  urls: [ string ],
  channels: [{
    type: string,
    id: string
  }],
  office: {
    name: string,
  }
}
