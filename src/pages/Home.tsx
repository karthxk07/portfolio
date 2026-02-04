import Feed from '../components/Feed/Feed';

const Home = () => {
    return (
        <>
            <Feed limit={3} />
            {/* 
         Feed already contains MainProjects and OtherProjects, 
         but based on previous implementation Feed contained them.
         We should ensure Feed uses the limit correctly for blogs, 
         and keeps displaying projects as part of the "homepage feed".
       */}
        </>
    );
};

export default Home;
