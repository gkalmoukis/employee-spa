interface Id {
    $oid: string;
}

export interface IEmployee {
    _id: Id;
    name: string;
    email: string;
    password: string;
    role: string;
}