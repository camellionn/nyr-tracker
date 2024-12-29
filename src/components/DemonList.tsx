import { useEffect, useState } from 'react';
import { Demon } from 'megaten';

const DemonList  = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDemon = () => {
            try {
                const demonArray = [...Demon.array];
                setData(demonArray);
            } catch (err) {
                setError('Failed to fetch demon data');
            } finally {
                setLoading(false);
            }
        };

        fetchDemon();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map((demon: any) => (
                <li key={demon.name}>
                    <strong>{demon.name}</strong> - Level: {demon.level}
                    {demon.resistances && (
                        <div>
                            <h4>Resistances:</h4>
                        <ul>
                            <li><strong>Weak:</strong> {demon.resistances.weak.join(', ') || 'None'} </li>
                            <li><strong>Weak:</strong> {demon.resistances.resist.join(', ') || 'None'} </li>
                            <li><strong>Weak:</strong> {demon.resistances.null.join(', ') || 'None'} </li>
                            <li><strong>Weak:</strong> {demon.resistances.drain.join(', ') || 'None'} </li>
                            <li><strong>Weak:</strong> {demon.resistances.repel.join(', ') || 'None'} </li>

                        </ul>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default DemonList;