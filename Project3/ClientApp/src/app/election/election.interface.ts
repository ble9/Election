import { IAddress } from "../iaddress";

export interface IElection {
  id: number,
  name: string,
  electionDay: string,
  election: {
    name: string,
    electionDay: string,
  },
  otherElections: [{
    name: string,
    electionDay: string
  }],
  pollingLocations: [{
    address: IAddress,
    pollingHours: string
  }],
  earlyVoteSites: [{
    address: IAddress,
    pollingHours: string,
    startDate: string,
    endDate: string
    }],
  contests: [{
    office: string,
    candidates: [{
      name: string,
      candidateUrl: string,
      party: string,
      channels: [{
        type: string,
        id: string
      }]
    }],
    links: {
      youtube: string,
      facebook: string,
      twitter: string
    }
  }]
}