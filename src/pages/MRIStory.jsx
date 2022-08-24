import MaanSickHeader from "../components/MaanSickHeader";
import MRIStoryBoard from "../components/MRIStoryBoard";

const MRIStory = () => {
    return (
    <div>
        <MaanSickHeader/>
        <div className = 'grid grid-cols-10 gap-10 grid-rows-6'>
            <div className="col-span-3"></div>
            <div className="col-span-4">
            <MRIStoryBoard/>
            </div>
            <div className="col-span-3 p-10">
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum ipsum magnam tempore animi aut suscipit hic soluta rerum laboriosam maiores nesciunt facere fugit quo laudantium repellendus atque, natus enim obcaecati nulla reprehenderit reiciendis cupiditate corporis ratione. Voluptates, facere? Eligendi reprehenderit dolor sint voluptatem deserunt facere officia minus alias accusamus.</p> */}
            </div>
        </div>
    </div>
    );
}
 
export default MRIStory;