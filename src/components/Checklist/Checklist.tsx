export default function ExperienceChecklist() {
    const items = [
        'Highly Experienced',
        'Tertiary Educated',
        'Targets Student Interests',
        'Maximum Engagement'
    ];

    return (
        <div className="w-full max-w-2xl">
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center p-4">
                            <i aria-hidden="true" className="fas fa-check"/>
                        </div>
                        <span className="text-orange-400 font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}