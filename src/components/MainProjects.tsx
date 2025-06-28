import { easeInOut, motion } from "framer-motion";
import mainProjectImage from "../assets/mainProjectImage.png"; // **Add your image**
import smallProject1Image from "../assets/smallProject1Image.png"; // **Add your image**
import smallProject2Image from "../assets/smallProject2Image.png"; // **Add your image**

const MainProjects = () => {
  return (
    <section id="projects" className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="relative">
            <img
              src={mainProjectImage}
              alt="Main Project"
              className="rounded-4xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#121212]" />
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4"
            >
              green{"-"}
              <span className="bg-gradient-to-b from-green-900 to-green-700 bg-clip-text text-transparent">
                RISC
              </span>
            </motion.h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              from learning how to program one to actually making one,
              green-risc is a minimal implementation of a 32 bit, 5 staged
              pipelined RISC-V CPU core in Verilog HDL. wrote decoder logic for
              simple instructions like ADD, BEQ from the ISA instruction set.
            </p>
            <a
              href="https://github.com/karthxk07/green-risc"
              className="text-[#007AFF] hover:underline"
            >
              Github&rarr;
            </a>
          </div>
        </div>

        {/* Small Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="bg-white/5 p-6 border  rounded-4xl border-white/10 ">
            <img
              src={smallProject1Image}
              alt="Small Project 1"
              className="rounded-lg mb-4 aspect-video object-cover"
            />
            <motion.h3
              initial={{ y: -15, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeInOut }}
              className="text-2xl font-bold mb-2"
            >
              Document{" "}
              <span className="bg-gradient-to-b from-yellow-700 to-yellow-100 text-transparent bg-clip-text">
                Management
              </span>{" "}
              System
            </motion.h3>
            <p className="text-gray-400 mb-4">
              A group based document mangement system, that allows you to create
              groups and add/manage files. a unique solution with a gdrive
              workaround is implemented that allows users to store their files
              on personal google drive,and only update the metadadta on the
              database, reducing the server storage resource utilization by
              almost 95%
            </p>
            <a href="https://github.com/karthxk07/dms" className="text-[#007AFF] hover:underline">
              github &rarr;
            </a>
          </div>
          <div className="bg-white/5 p-6 rounded-4xl border  border-white/10 ">
            <img
              src={smallProject2Image}
              alt="Small Project 2"
              className="rounded-lg mb-4 aspect-video object-cover scale-x-[-1]"
            />
            <motion.h3
              initial={{ y: -15, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeInOut }}
              className="text-2xl font-bold mb-2"
            >
              <span className="bg-gradient-to-b from-fuchsia-700 to-fuchsia-300 bg-clip-text text-transparent">
                AIMOne
              </span>
              - Education ERP
            </motion.h3>
            <p className="text-gray-400 mb-4">
              An educational entriprise management system with two end interface
              for both students and faculty to efficiently manage the courses,
              offering basic CRUD functions and feature like timetable
              update/view, marks update/view, attendence update/view and fee
              payments through a payment gateway. A sophisticated and robust
              database schema is desined to allow easy scaling up.
            </p>
            <a href="https://github.com/karthxk07/aimone" className="text-[#007AFF] hover:underline">
              github &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProjects;
