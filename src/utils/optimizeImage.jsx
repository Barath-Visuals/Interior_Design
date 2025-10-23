export default async function OptimizeImage (src, targetWidth = 800, quality = 0.7) {
    try {
        let imgSrc = src;
        if (src.startsWith("http")) {
        const res = await fetch(src, { mode: "cors" });
        const blob = await res.blob();
        imgSrc = URL.createObjectURL(blob);
        }

        return await new Promise((resolve) => {
            const img = new Image();
            img.src = imgSrc;

            img.onload = () => {
                const scaleFactor = targetWidth / img.width;
                const canvas = document.createElement("canvas");
                canvas.width = targetWidth;
                canvas.height = img.height * scaleFactor;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                const optimized = canvas.toDataURL("image/webp", quality);
                resolve(optimized);
            };

            img.onerror = () => {
                console.warn("Image failed to load, using original src:", src);
                resolve(src);
            };
        });
    } catch (err) {
        console.error("OptimizeImage error:", err);
        return src;
    }
}