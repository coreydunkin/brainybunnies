export default function PracticalChecklist() {
    const items = [
        {icon: 'fas fa-pencil-alt text-orange-500', text: 'How to Hold a Pencil'},
        {icon: 'fas fa-angle-double-up text-orange-500', text: 'How to sharpen a pencil'},
        {icon: 'far fa-sticky-note text-orange-500', text: 'How to use a glue stick'},
        {icon: 'fas fa-eraser text-orange-500', text: 'How to use an eraser'},
        {icon: 'fas fa-cut text-orange-500', text: 'Scissor Safety & how to use them'},
        {icon: 'fas fa-shopping-bag text-orange-500', text: 'How to pack and unpack your bag'},
        {icon: 'fas fa-tshirt text-orange-500', text: 'How to take your jumper on and off'},
        {icon: 'fas fa-wine-bottle text-orange-500', text: 'How to refill your waterbottle'}
    ]

    return (
        <div className="w-full max-w-2xl">
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-5">
                        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center p-8">
                            <i aria-hidden="true" className={`${item.icon} text-3xl`}/>
                        </div>
                        <span className="text-orange-400 font-headers text-xl">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}