import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';

function Index({ posts }) {
    return (
        <>
        <Layout>
            <Feed posts={posts}></Feed>
            <Suggestions></Suggestions>
        </Layout>
        </>
    );
}


export async function getServerSideProps (context) {
    // implementar a busca dos dados no mongodb

    const data = [
        {
            id: 1,
            author: {
                id: 1,
                avatar: 'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
                name: 'Fulano de tal',
                username: 'Fulado de tal',
            },
            description: 'descrição',
            tags: [{title: '#youtube'}, {title: '#endregionclone'}],
            songName: 'The Nights - Avicii',
            videoUrl: 'https://v16-webapp.tiktok.com/92aa6abd3550645fbdc3f464edb93027/626e0ab5/video/tos/useast2a/tos-useast2a-ve-0068c002/bdf5927802234a0889038858d3f97991/?a=1988&br=6808&bt=3404&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZM1xRwe2NR.oyl7Gb&l=202204302220290101910520411ABA172F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ1bjs6ZndsPDMzNzczM0ApZ2U0ZDVoPGUzNzZnODs4N2dmbWg2cjRnNWVgLS1kMTZzcy81X2NeYV40Ll8vLjZgNjE6Yw%3D%3D&vl=&vr=',
            likes: 670,
            comments: 15,
            replies: 50
        },
        {
            id: 2,
            author: {
                id: 2,
                avatar: 'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
                name: 'Fulano de tal',
                username: 'Fulado de tal',
            },
            description: 'descriçãotwo',
            tags: [{title: '#youtube'}, {title: '#endregionclone'}],
            songName: 'musicatwo',
            videoUrl: 'https://v16-webapp.tiktok.com/92aa6abd3550645fbdc3f464edb93027/626e0ab5/video/tos/useast2a/tos-useast2a-ve-0068c002/bdf5927802234a0889038858d3f97991/?a=1988&br=6808&bt=3404&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZM1xRwe2NR.oyl7Gb&l=202204302220290101910520411ABA172F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ1bjs6ZndsPDMzNzczM0ApZ2U0ZDVoPGUzNzZnODs4N2dmbWg2cjRnNWVgLS1kMTZzcy81X2NeYV40Ll8vLjZgNjE6Yw%3D%3D&vl=&vr=',
            likes: 670,
            comments: 15,
            replies: 50
        },
    ]
    return {
        props:{
            posts: data,
        }
    }
}   

export default Index;