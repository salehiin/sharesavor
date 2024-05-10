import FoodCard from "./FoodCard";


const Featured = () => {
    return (
        <div className='flex p-6'>
            <div className='w-1/2 bg-black text-white p-4'>
                <h1 className='text-6xl font bold mb-4'>Featured Foods</h1>
                <p className='text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus dolores modi libero! Nobis accusantium recusandae omnis impedit temporibus soluta consectetur repellendus officia adipisci? Vero recusandae, voluptates ut soluta dolorem exercitationem quos? Officiis nemo dolorum voluptatibus temporibus illo reiciendis atque odio repudiandae fuga eius neque blanditiis, voluptate saepe repellat iure cumque consequuntur omnis sapiente quidem cupiditate quis? Ullam, ea quis beatae dignissimos possimus enim. Facilis, magni in sunt ad debitis quasi ab rem ipsa accusamus unde veritatis earum amet provident cumque, itaque quis quidem aliquid odit quas error tempore tenetur ratione vero mollitia! Optio velit hic sequi distinctio eligendi reprehenderit assumenda, sed a qui temporibus, magni error enim mollitia cumque, impedit quis? Eius perferendis nihil ea ipsum veniam totam libero animi deserunt cumque cum est nobis, assumenda sapiente recusandae minus atque illo, esse odit. Sunt, quidem cum dolore dicta alias non delectus accusamus perferendis excepturi qui, itaque veritatis odit id culpa, possimus nisi voluptas expedita ratione commodi saepe sapiente debitis maxime ducimus soluta? Beatae aliquam architecto amet modi. Voluptatum animi magnam, eveniet, nihil assumenda consequatur quo, architecto velit quidem deleniti explicabo id dolor voluptates exercitationem sequi sapiente quae optio ab? Est deleniti eveniet provident fugiat dolor ab maiores quia fuga.
                </p>
                <br />
                <p className='text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis, quam totam ex ipsam doloremque asperiores odit rerum, quia autem quos numquam temporibus repudiandae fugit debitis distinctio voluptatibus blanditiis saepe nisi harum vel beatae molestiae. Pariatur incidunt maiores, sequi distinctio ipsa aperiam facilis tempore maxime cupiditate molestias debitis voluptate error quaerat nam? Numquam cum rerum libero, asperiores at quam fuga! Perferendis illum exercitationem cum aliquid ad qui amet ipsa corporis, id quibusdam sapiente sint nostrum recusandae! Accusamus consectetur tempora suscipit aperiam, voluptate laboriosam, in voluptatibus, quasi explicabo et sit iusto aut? Labore facilis aut animi molestias reprehenderit ipsum, quos illum?
                </p>
            </div>
            <div className='w-1/2 bg-green mx-auto'>
                <FoodCard></FoodCard>
            </div>
        </div>
    );
};

export default Featured;