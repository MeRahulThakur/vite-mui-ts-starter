import { useRef, useLayoutEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';

import Banner from './Banner';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PageNotFound from './PageNotFound';

const PageLayout = () => {

    const refContentContainer = useRef<HTMLDivElement>(null);

    const sizeContentContainenr = () => {
        const contentContainerPosition = refContentContainer.current?.getBoundingClientRect().top || 0;
        const bottomPadding = 10;
        const contentContainerHeight = (window.innerHeight - contentContainerPosition - bottomPadding) + "px"
        if(refContentContainer.current)
            refContentContainer.current.style.minHeight = contentContainerHeight;
    };

    useLayoutEffect(() => {
        sizeContentContainenr();
        window.addEventListener("resize", sizeContentContainenr);
    });

    return (
        <Container maxWidth="xl">
            <Banner />
            <Container sx={{ border: 0 }} ref={refContentContainer} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Container>
        </Container>
    )
}

export default PageLayout