export enum PlanetsTypes {
  LOAD_REQUEST = "@planets/LOAD_REQUEST",
  LOAD_SUCCESS = "@planets/LOAD_SUCCESS",
  LOAD_FAILURE = "@planets/LOAD_FAILURE"
}

export interface Planet {
  id: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  url: string;
  created: Date;
  edited: Date;
}

export interface PlanetsState {
  readonly data: Planet | null;
  readonly loading: boolean;
  readonly error: boolean;
}
