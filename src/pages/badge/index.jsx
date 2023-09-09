import { Codeshare } from "../../component/codeshare";
import { Layout } from "../../component/layout";

export const Badge = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Badge</h1>
        <p>
          Badges are used to highlight an item's status for quick recognition.
        </p>
        <h3>Usages</h3>
        <div className="showcase">
          <div className="badge">
            <img
              className="avatar"
              src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
              alt=""
            />
            <span className="online"></span>
          </div>
          <div className="badge">
            <img
              className="avatar"
              src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
              alt=""
            />
            <span className="offline"></span>
          </div>
          <div className="badge">
            <img
              className="avatar"
              src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
              alt=""
            />
            <span className="dnd"></span>
          </div>
        </div>
        <p>
          To achieve the above badge, you need to follow the following code:
        </p>
        <Codeshare
          code={`< -- for online Badge -- >
               <div className="badge">
               <img className='avatar' src="URL"/>
                <span className="online"></span>
               </div>
        < -- for Offline Badge -- >
             <div className="badge">
                <img className='avatar' src="URL"/>
             <span className="offline"></span>
            </div>
        < -- for DND Badge -- >
           <div className="badge">
                 <img className='avatar' src="URL" />
                <span className="dnd"></span>
           </div>`}
        />

        {/* image card  */}
        <h1>Icon Badge</h1>
        <p>
          Icon Badge is used to show the quantity on the top of the svg/image.
        </p>
        <h3>Usages</h3>
        <div className="showcase">
          <div className="badge">
            <img
              className="avatar"
              src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            />
            <span className="number">20</span>
          </div>
        </div>

        <p>
          To achieve the above Badge, you need to follow the following code:
        </p>
        <Codeshare
          code={`// for Icon Badge
          <div className="badge">
          <img className='avatar' src="URL" />
         <span className="number"></span>
    </div>`}
        />
      </div>
    </Layout>
  );
};
