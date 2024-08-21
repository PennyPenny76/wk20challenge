// eslint-disable-next-line react/prop-types
export default function DownloadButton({ fileUrl, fileName }) {
    return (
        <button
            onClick={() => {
                const link = document.createElement('a');
                link.href = fileUrl;
                link.download = fileName;
                link.click();
            }}
        >
            Download My Resume
        </button>
    );
}
