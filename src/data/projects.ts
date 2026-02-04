import mainProjectImage from "../assets/mainProjectImage.png";
import smallProject1Image from "../assets/smallProject1Image.png";
import smallProject2Image from "../assets/smallProject2Image.png";

export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    tags?: string[];
    link: string;
    status?: string; // e.g. "Main Project", "Side Project"
    associatedBlogs?: string[]; // Blog IDs related to this project
}

export const PROJECTS: Project[] = [
    {
        id: "green-risc",
        title: "green-RISC",
        description: "from learning how to program one to actually making one, green-risc is a minimal implementation of a 32 bit, 5 staged pipelined RISC-V CPU core in Verilog HDL. wrote decoder logic for simple instructions like ADD, BEQ from the ISA instruction set.",
        image: mainProjectImage,
        tags: ["Verilog", "RISC-V", "Computer Architecture"],
        link: "https://github.com/karthxk07/green-risc",
        status: "Main Project",
        associatedBlogs: ["yKaNdiKT8YaAqsr1VepW"]
    },
    {
        id: "dms",
        title: "Document Management System",
        description: "A group based document mangement system, that allows you to create groups and add/manage files. a unique solution with a gdrive workaround is implemented that allows users to store their files on personal google drive,and only update the metadadta on the database, reducing the server storage resource utilization by almost 95%",
        image: smallProject1Image,
        tags: ["React", "Node.js", "Google Drive API"],
        link: "https://github.com/karthxk07/dms",
        status: "Main Project"
    },
    {
        id: "aimone",
        title: "AIMOne - Education ERP",
        description: "An educational entriprise management system with two end interface for both students and faculty to efficiently manage the courses, offering basic CRUD functions and feature like timetable update/view, marks update/view, attendence update/view and fee payments through a payment gateway. A sophisticated and robust database schema is desined to allow easy scaling up.",
        image: smallProject2Image,
        tags: ["ERP", "Database Design", "Fullstack"],
        link: "https://github.com/karthxk07/aimone",
        status: "Main Project",
        associatedBlogs: [] // Placeholder for now
    },
    {
        id: "video-call",
        title: "video-call",
        description: "peer-to-peer webRTC based video call app with websocket signaling",
        link: "https://github.com/karthxk07/video-chat",
        tags: ["WebRTC", "WebSockets"],
        status: "Side Project"
    },
    {
        id: "chatx",
        title: "chatX",
        description: "real time guest authentication based chat room app using websockets(socket.io)",
        link: "https://github.com/karthxk07/chatx",
        tags: ["Socket.io", "Real-time"],
        status: "Side Project"
    },
    {
        id: "image-restoration",
        title: "Image restoration model (Samsung PRISM)",
        description: "improved upon a image restoration moodel to optimize it for edge devices as part of my Samsung PRISM internship, implemented a u-net model - KBNet with a fourier channel attention to reduce computation cost while mainting satisfactory results",
        link: "#", // No link provided in original
        tags: ["AI/ML", "Python", "Computer Vision"],
        status: "Side Project"
    }
];
