export default function GridBackground({ isLight }) {
    return (
        <div className="pointer-events-none fixed inset-0">
            <div
                className={`absolute inset-0 ${isLight
                    ? 'bg-[linear-gradient(rgba(8,145,178,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.03)_1px,transparent_1px)]'
                    : 'bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)]'
                    }`}
                style={{
                    backgroundSize: '80px 80px',
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                }}
            />
        </div>
    );
}