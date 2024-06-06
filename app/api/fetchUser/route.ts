import { NextResponse } from 'next/server';
import axiosInstance from '../../lib/axiosInstance';
import axios from 'axios';

export async function GET() {
    let url = `/users`

    try {
      const response = await axiosInstance.get(url);
      const results = response.data;
      return NextResponse.json(results, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
  };