"use client"

import React, { useEffect, useState } from 'react'
import { fetchData } from '@/app/home/data'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'next/navigation'
import _ from 'lodash'

const DetailPage = () => {
    const { user } = fetchData()
    const dataUser = useSelector((state: any) => state.user.dataUser);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const searchParams = useSearchParams()
    const paramId = searchParams.get('id')

    const handleLoading = () => {
        setIsLoading(false)
    }
    

    useEffect(() => {
        _.isEmpty(dataUser) && user()
        handleLoading()
    },[dataUser])

    if (isLoading) {
        return (
            <div className='container-loader'>
                <div className="loader" />
            </div>
        )
    }

    return (
        <div className='container-table container-detail'>
            <div>
                {
                    dataUser.filter((val:any) => val.id == paramId).map((data:any) => (
                    <div>
                        <div className='content'>
                            <div>Name:</div>
                            <div>{data.name}</div>
                        </div>
                        <div className='content'>
                            <div>Username:</div>
                            <div>{data.username}</div>
                        </div>
                        <div className='content'>
                            <div>Email:</div>
                            <div>{data.email}</div>
                        </div>
                        <div className='content'>
                            <div>Phone:</div>
                            <div>{data.phone}</div>
                        </div>
                        <div className='content'>
                            <div>Website:</div>
                            <div>{data.website}</div>
                        </div>
                        <div className='content'>
                            <div>Company Name:</div>
                            <div>{data.company.name}</div>
                        </div>
                        <div className='content'>
                            <div>Address:</div>
                            <div>{data.address.street} {data.address.suit} {data.address.zipcode}</div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DetailPage