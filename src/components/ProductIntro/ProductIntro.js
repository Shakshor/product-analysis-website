import React from 'react';
import './ProductIntro.css';
import img from '../../images/DellLaptop.jpg';

const ProductIntro = () => {
    return (
        <section className='product-area'>
            <div className="product-details">
                <h1 className='product-title'>GRAB THE BEST<br></br>CHOOSE THE BEST</h1>
                <p>Dell Inspiron 15 3510 comes with Intel Celeron Dual Core N4020 (4MB Cache, 1.10 GHz Up To 2.80 GHz) Processor and Intel UHD Graphics 600. This Dell Inspiron 15 3510 featured 4GB DDR4 2400MHz, 1TB 5400RPM SATA HDD, that will provide you with responsive and stable performance. It is also designed with 15.6-inch HD (1366x768) Anti-Glare LED Backlight Narrow Border Display</p>
            </div>
            <div className="product-pic">
                <img src={img} alt="" />
            </div>
        </section>

    );
};

export default ProductIntro;