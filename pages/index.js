import GroupIndex from "../components/Group/GroupIndex"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div exit={{opacity: 0}} initial='initial' animate='animate'>
            <GroupIndex/>
        </motion.div>
    );
};

export default Home;