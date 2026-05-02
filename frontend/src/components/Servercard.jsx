import React from 'react';

function ServerCard({ server }) {
return (
<div className="bg-card-bg p-4 rounded-xl border border-gold/30 hover:border-gold transition-all">
<div className="flex items-center gap-3">
<img src={server.photoURL || '/default-avatar.png'} alt={server.name} className="w-12 h-12 rounded-full" />
<div>
<h3 className="font-semibold">{server.name}</h3>
<p className="text-sm text-gray-400">{server.venue}</p>
</div>
</div>
<button className="mt-4 w-full bg-gold text-black py-2 rounded-lg font-medium hover:bg-yellow-300">
Drop a Dime ({server.dimes})
</button>
</div>
);
}

export default ServerCard;
