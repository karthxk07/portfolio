import { db } from "../lib/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import type { BlogPost } from "../data/blogs";

const BLOG_COLLECTION = "posts";

export const getBlogs = async (): Promise<BlogPost[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, BLOG_COLLECTION));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as BlogPost));
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error; // Re-throw to let the UI handle the error state
    }
};

export const getBlogById = async (id: string): Promise<BlogPost | null> => {
    try {
        const docRef = doc(db, BLOG_COLLECTION, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as BlogPost;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching blog post:", error);
        throw error;
    }
}
