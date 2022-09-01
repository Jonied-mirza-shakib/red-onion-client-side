import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Users = () => {
    const { data: user, isLoading, refetch } = useQuery(['users'], () => fetch('https://red-onion-server-side.vercel.app/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    const makeAnAdmin = email => {
        fetch(`https://red-onion-server-side.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    alert('Field to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    alert('Successfully made an admin')
                }
                console.log('Success:', data);
            })
    }
    return (
        <div>
            <h1 className='text-3xl text-center text-blue-700 uppercase font-bold mt-5'>all user {user?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>EMAIL</th>
                            <th>MAKE ADMIN</th>
                            <th>REMOVE USER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((users, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{users.email}</td>
                                    <td>{users.role !== 'admin' && <button class="btn btn-xs" onClick={() => makeAnAdmin(users.email)}>Make An Admin</button>}</td>
                                    <td><button class="btn btn-xs">DELETE</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;