import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import Dashboard from '../pages/Dashboard';

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link: '/dashboard',
    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCartIcon />,
        link: '/orders',
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Analytics',
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <BarChartIcon />,
        link: '/reports',
        children: [
            {
                segment: 'sales',
                title: 'Sales',
                icon: <DescriptionIcon />,
                link: '/reports/sales',
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <DescriptionIcon />,
                link: '/reports/traffic',
            },
        ],
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <LayersIcon />,
        link: '/integrations',
    },
];

const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: 'class',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));



function Orders() {
    return <div>Orders Content</div>;
}

function Reports() {
    return <div>Reports Content</div>;
}

function Sales() {
    return <div>Sales Content</div>;
}

function Traffic() {
    return <div>Traffic Content</div>;
}

function Integrations() {
    return <div>Integrations Content</div>;
}

export default function DashboardLayoutBasic(props) {
    const { window } = props;

    const demoWindow = window ? window() : undefined;

    return (
        <AppProvider
            navigation={NAVIGATION}
            theme={demoTheme}
            window={demoWindow}
            authentication={true}
            Skeleton={Skeleton}
        >
            <DashboardLayout>
                <PageContainer>
                    <Router>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/orders/:id" element={<Orders />} />
                            <Route path="/reports/sales" element={<Sales />} />
                            <Route path="/reports/traffic" element={<Traffic />} />
                            <Route path="/reports" element={<Reports />} />
                            <Route path="/integrations" element={<Integrations />} />
                            <Route path="/" element={<Dashboard />} />
                        </Routes>
                    </Router>
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}