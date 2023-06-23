import {users} from "../../../data/users"

export default function handler(req, res) {
    if (req.method === 'GET') {
        const {userId} = req.query;
        const user = users.find((data) => data.id === Number(userId));
        res.status(200).json(user);
    } else if (req.method === 'DELETE') {
        const {userId} = req.query;
        const deleteUser = users.find((data) => data.id === Number(userId));
        const index = users.findIndex((data) => data.id === Number(userId));
        users.splice(index, 1);

        res.status(200).json(deleteUser);
    }
}