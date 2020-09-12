import { useEffect } from "react";
//you should define your custom hooks with the word use
function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
