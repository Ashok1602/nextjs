import {users} from "../../../data/users"

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(users)
    } 
    else {
        const newUser = {
            id: Date.now(),
            name: req.body.userName
        }
        users.push(newUser);
        res.status(201).json(users)
    }  
}