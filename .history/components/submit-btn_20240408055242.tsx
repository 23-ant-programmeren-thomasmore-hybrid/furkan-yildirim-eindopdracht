import React, { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

// Kendi useFormStatus hook'umuzu yazalım
function useFormStatus() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form gönderildiğinde, bu durumu simüle etmek için bir gecikme ekleyelim
  useEffect(() => {
    if (isSubmitting) {
      const timer = setTimeout(() => {
        setIsSubmitting(false);
      }, 3000); // 3 saniye sonra gönderme işlemini bitir
      return () => clearTimeout(timer);
    }
  }, [isSubmitting]);

  return {
    pending: isSubmitting,
    setPending: setIsSubmitting, // Bu fonksiyonu form gönderme işlemi başlatıldığında çağırabiliriz
  };
}

export default function SubmitBtn() {
  const { pending, setPending } = useFormStatus();

  const handleSubmit = (event) => {
    event.preventDefault(); // Formun varsayılan gönderme işlemini engelleyelim
    setPending(true); // Gönderme işlemini başlat
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        )}
      </button>
    </form>
  );
}
