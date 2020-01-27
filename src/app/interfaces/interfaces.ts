export interface TicketStatus {
  idTicketStatus: number;
  nameTicketStatus: string;
}

export interface Hall {
  idHall: number;
  nameHall: string;
  seatCollection: Seat[];
}

export interface Movie {
  idMovie?: number;
  title?: string;
  description?: string;
  genre?: string;
  year?: string;
  country?: string;
  image?: string;
  length?: number;
  screeningCollection?: Screening[];
}

export interface Screening {
  idScreening: number;
  date: Date;
  status?: boolean;
  idHall: Hall;
  idMovie: Movie;
}

export interface Seat {
  idSeat: number;
  row: number;
  place: number;
}

export interface SeatDto {
  idSeat: number;
  row: number;
  place: number;
  taken?: boolean;
}

export interface User {
  login: string;
  password: string;
  email: string;
  firstname: string;
  surname: string;
  birthday?: Date;
}

export interface Ticket {
  idTicket?: number;
  login?: string;
  price: number;
  idSeat: number;
  idScreening: number;
  idTicketStatus: number;
  idTicketType: number;
}

export interface Tickets {
  idTicket?: number;
  login?: Person;
  price: number;
  idSeat: Seat;
  idScreening: Screening;
  idTicketStatus: TicketStatus;
  idTicketType: TicketType;
}

export interface TicketType {
  idTicketType?: number;
  nameTicketType: string;
}

export interface Person {
  login: string;
  password: string;
  email: string;
  firstname: string;
  surname: string;
  birthday?: any;
}
