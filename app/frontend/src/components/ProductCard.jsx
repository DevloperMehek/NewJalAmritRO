"import { Button } from \"@/components/ui/button\";
import { Droplet, Tag } from \"lucide-react\";
import { useBooking } from \"@/contexts/BookingContext\";

const ProductCard = ({ p }) => {
  const { openBooking } = useBooking();
  const off = p.mrp && p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;

  return (
    <div
      className=\"group relative rounded-3xl bg-white border border-slate-200/80 overflow-hidden lift-on-hover\"
      data-testid={`product-card-${p.id}`}
    >
      {p.tags?.length > 0 && (
        <div className=\"absolute top-3 left-3 z-10 flex flex-col gap-2\">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className=\"bg-[#FF7A00] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide\"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {off > 0 && (
        <div className=\"absolute top-3 right-3 z-10 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md\">
          {off}% OFF
        </div>
      )}

      <div className=\"aspect-[4/3] bg-gradient-to-br from-sky-50 to-blue-100 overflow-hidden\">
        <img
          src={p.image}
          alt={p.name}
          loading=\"lazy\"
          className=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500\"
        />
      </div>

      <div className=\"p-5\">
        <div className=\"text-[11px] uppercase tracking-[0.2em] font-bold text-[#00A3E0] mb-1\">{p.brand}</div>
        <h3 className=\"font-display text-lg font-bold text-[#0B3B60] line-clamp-1\">{p.name}</h3>
        <p className=\"text-sm text-slate-500 mt-1 line-clamp-1\">{p.tech}</p>
        <p className=\"text-xs text-slate-400 mt-0.5\">{p.capacity}</p>

        <div className=\"mt-4 flex items-end justify-between\">
          <div>
            <div className=\"flex items-baseline gap-2\">
              <span className=\"font-display text-2xl font-extrabold text-[#0B3B60]\">₹{p.price.toLocaleString(\"en-IN\")}</span>
              {p.mrp > p.price && (
                <span className=\"text-sm text-slate-400 line-through\">₹{p.mrp.toLocaleString(\"en-IN\")}</span>
              )}
            </div>
            <div className=\"text-[10px] uppercase tracking-wider text-slate-500 mt-0.5 flex items-center gap-1\">
              <Tag size={11} /> Inclusive of GST
            </div>
          </div>
          <Button
            size=\"sm\"
            className=\"rounded-full bg-[#0B3B60] hover:bg-[#00A3E0] text-white px-4 h-9 font-semibold\"
            onClick={() => openBooking(`Enquiry — ${p.name}`)}
            data-testid={`product-enquire-${p.id}`}
          >
            <Droplet size={14} className=\"mr-1.5\" /> Enquire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
"
