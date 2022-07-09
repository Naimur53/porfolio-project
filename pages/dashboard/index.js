import RecentMomentChart from "../../src/Components/DashboardCompo/RecentMomentChart";
import DashboardLayout from "../../src/Layouts/DashboardLayout";
import { Box, Container, Stack, Grid, Paper, Typography, IconButton, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import axios from 'axios';
import CountUp from 'react-countup';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import CategoryIcon from '@mui/icons-material/Category';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
// import RoundedServiceCart from "../../src/Components/DashboardCompo/RoundedServiceCart";

import dynamic from "next/dynamic";
const RoundedServiceCart = dynamic(() => import("../../src/Components/DashboardCompo/RoundedServiceCart"), {
    ssr: false
})
const Dashboard = (props) => {
    return (
        <Grid container spacing={2}>  <Grid item xs={12} md={3}>
            <Box sx={{ p: 2 }} className='bg-gray-900 shadow-sm text-white'>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    alignItems: 'center'
                }}>
                    <h2 className="text-xl">Loves</h2>
                    <IconButton
                        sx={{
                            background: 'hsl(215deg 69% 90%)',
                            color: 'hsl(215deg 70% 71%)'
                        }}
                    > <FavoriteIcon></FavoriteIcon></IconButton>
                </Box>
                <Typography variant='h5' className='text-center p-4 text-4xl' gutterBottom><CountUp end={753} /></Typography>
                <h2 className="text-red-500">Total Love Of Blog</h2>
            </Box>
        </Grid>
            <Grid item xs={12} md={3}>
                <Paper className='bg-gray-900 text-white' elevation={3} sx={{ p: 2 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}>
                        <h2 className="text-xl">Comments</h2>
                        <IconButton
                            sx={{
                                background: 'hsl(215deg 69% 90%)',
                                color: 'hsl(215deg 70% 71%)'
                            }}
                        > <CommentIcon></CommentIcon></IconButton>
                    </Box>
                    <Typography variant='h5' className='text-center p-4 text-4xl' gutterBottom>$<CountUp end={543} /></Typography>
                    <h2 className="text-green-500">Total Comments</h2>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className='bg-gray-900 text-white' elevation={3} sx={{ p: 2 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}>
                        <h2 className="text-xl">Categories</h2>
                        <IconButton
                            sx={{
                                background: 'hsl(215deg 69% 90%)',
                                color: 'hsl(215deg 70% 71%)'
                            }}
                        > <CategoryIcon></CategoryIcon></IconButton>
                    </Box>
                    <Typography className='text-center text-4xl p-4' variant='h5' gutterBottom><CountUp end={54} /></Typography>
                    <h2 className="text-green-500">All Categories</h2>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className='bg-gray-900 text-white' elevation={3} sx={{ p: 2 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}>
                        <h2 className="text-xl">Users</h2>
                        <IconButton
                            sx={{
                                background: 'hsl(215deg 69% 90%)',
                                color: 'hsl(215deg 70% 71%)'
                            }}
                        > <ConnectWithoutContactIcon></ConnectWithoutContactIcon></IconButton>
                    </Box>
                    <Typography className='text-center p-4 text-4xl' variant='h5' gutterBottom><CountUp end={2424} /></Typography>
                    <h2 className="text-red-500">Total User Login</h2>

                </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
                <RecentMomentChart ></RecentMomentChart>
            </Grid>
            <Grid item xs={12} md={5}>
                <RoundedServiceCart ></RoundedServiceCart>
            </Grid>
            <Grid item xs={12} md={9}>
                {/* <OrdersTable allOrders={allOrders}></OrdersTable> */}
            </Grid>
        </Grid>

    )
};
Dashboard.Layout = DashboardLayout
export default Dashboard;