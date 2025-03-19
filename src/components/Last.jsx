import prone from '/assets/pr-3.png'
import prtwo from '/assets/pr-4.png'
import prthree from '/assets/pr-5.png'
import prfour from '/assets/pr-6.png'
import prfive from '/assets/pr-8.png'


const LatestNews = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen ">
      <h6 className='text-[10px]  font-semibold text-center text-blue-950'>OUR BLOG</h6>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Latest News</h2>
      <div className='flex gap-10  justify-center'>
      <div>
        <div className='mb-3'>
        
        
           <img src={prone} alt="" width={260}/>
        </div>
        <div>
          <img src={prtwo} alt="" width={270} />
          
        </div>
      </div>
      
      <div>
         <div className='mb-3'>
          <img src={prthree} alt="" width={270}  />
          
        </div>
        <div >
        
        
           <img src={prfour} alt="" width={260}/>
        </div>
       
      </div>

      <div>
        <div className='mb-3'>
        
        
           <img src={prone} alt="" width={260} />
        </div>
        <div>
          <img src={prtwo} alt="" width={270} />
          
        </div>
      </div>

      <div>
         <div className='mb-3'>
          <img src={prthree} alt="" width={270} />
          
        </div>
        <div >
        
        
           <img src={prfour} alt="" width={280} />
        </div>
       
      </div>

      </div>
    </div>
    
  );
};

export default LatestNews;
