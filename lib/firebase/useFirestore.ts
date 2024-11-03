import { firestore } from "@/lib/firebase/firebase-client";
import { collection, doc, getDoc } from "firebase/firestore";

type DocFetchError = "NoCollection" | "NoDocRef" | "NoDoc";

interface UserData {
  role?: "admin";
}

interface MovieData {
  name?: string;
}

type DocData = UserData | MovieData;

const getDocData = async (colName: string, docName: string): Promise<[DocData?, DocFetchError?]> => {
  const col = collection(firestore, colName);

  if (!col) return [undefined, "NoCollection"];

  const docRef = doc(col, docName);

  if (!docRef) return [undefined, "NoDocRef"];

  const document = await getDoc(docRef);

  if (!document || !document.exists) return [undefined, "NoDoc"];

  const data = document.data();

  return [data as DocData, undefined];
}


const getUser = async (uid: string): Promise<[UserData?, DocFetchError?]> => {
  const [data, error] = await getDocData("users", uid);

  return [data as UserData, error];
}


export { getUser };
