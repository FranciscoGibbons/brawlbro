import { notFound } from "next/navigation";
import Image from "next/image";

const getPlayer = async (id) => {
  try {
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk3Njg0OWYyLTM3MDktNDE5MC1iZGE2LWEzODhjNDM2Mzc4ZiIsImlhdCI6MTcxMzcyNDIwNSwic3ViIjoiZGV2ZWxvcGVyLzkxZGFhOTA2LTYwNGQtMmE1YS03NWFkLWNjNmUwZDU0ZTMzNiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTgxLjk3LjE0MS43NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.cQdTbx_87cWaNJ_Vxw38oP5WN9z1Mc2yWQKQpRWjM8QlJKkZgKecec1eMUJ3MxteEAaYSH8zlEvwpmNBnCD2Xw';

    const res = await fetch(`https://api.brawlstars.com/v1/players/%23${id}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error:', error);
    notFound()
  }
};

export default async function PlayerPage( { params } ) {  
  const player = await getPlayer(params.id);

  return (
    <div>
       <h1 className="text-2xl">{player.name} Stats | BrawlBro</h1>
       <h2>{player.brawlers.length} / 78 Unlocked Brawlers a</h2>

        {
            player.brawlers.sort((a, b) => b.trophies - a.trophies).map(brawler => <h3 key={brawler.id}><Image width={100} height={100} src={`/brawlers-pin/${brawler.name.toLowerCase()}_pin.webp`} alt=""/> {brawler.name} - {brawler.trophies} 🏆 - Rank {brawler.rank}</h3>)
        }
    </div>
  );
}