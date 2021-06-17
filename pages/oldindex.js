import GroupIndex from "../components/Group/GroupIndex"
import { motion } from "framer-motion"
import GroupIndex2 from "../components/Group/GroupIndex2";

const Home = () => {
    return (
        <div exit={{opacity: 0}} initial='initial' animate='animate'>
            <GroupIndex/>
        </div>
    );
};

export default Home;