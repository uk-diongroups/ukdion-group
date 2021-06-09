import GroupIndex from "../components/Group/GroupIndex"
import Footer from "../components/shared/Footer/Footer";
import { motion } from "framer-motion"


const Home = () => {
    return (
        <motion.div exit={{opacity: 0}} initial='initial' animate='animate'>
            <GroupIndex/>
            <Footer />
        </motion.div>
    );
};

export default Home;