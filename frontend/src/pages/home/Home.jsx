import Sidebar from "./sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg 
            overflow-hidden bg-[#3F403F] bg-clip-padding">
            <Sidebar />
            <MessageContainer />
       </div>
    );
};

export default Home;
