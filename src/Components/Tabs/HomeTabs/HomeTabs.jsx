/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './HomeTabsStyle.css'
import { PostGet } from "../../../API/PostGet";
import TabCard from "../TabsCard/TabCard";
// import TabCard from "../TabsCard/TabCard";

const HomeTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [postData, setPostData] = PostGet();
    console.log(postData);




    return (
        <div className="mainWidth  mtop">
           <div className="">
           <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='d-flex listStyle gap-3 textSize '>
                    <Tab>All Post</Tab>
                    <Tab>Article</Tab>
                    <Tab>Event</Tab>
                    <Tab>Educational</Tab>
                    <Tab>Jobs</Tab>
                </TabList>
               
                <TabPanel>
                    {
                        postData?.map(post => <TabCard key={post.title} post={post}></TabCard> )
                    }
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>



            </Tabs>
           </div>
           
        </div>
    );
};

export default HomeTabs;