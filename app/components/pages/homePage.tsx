"use client"

import React, { useEffect, useState } from 'react'
import { fetchData } from '@/app/home/data'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const HomePage = () => {
    const { user } = fetchData()
    const dataUser = useSelector((state: any) => state.user.dataUser);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const handleLoading = () => {
        setIsLoading(!isLoading);
    }

    useEffect(() => {
        user()
        handleLoading()
    },[])

    if (isLoading) {
        return (
            <div className='container-loader'>
                <div className="loader" />
            </div>
        )
    }

    return (
        <div className='container-table'>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                {
                    dataUser.map((data:any) => (
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.company.name}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td>
                            <Link href={`/detail?id=${data.id}`}>
                                <button className='button-detail'>Detail</button>
                            </Link>
                        </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default HomePage