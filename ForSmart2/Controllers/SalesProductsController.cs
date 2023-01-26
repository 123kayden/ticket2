using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ForSmart2.DBContext;

namespace ForSmart2.Controllers
{
    public class SalesProductsController : Controller
    {
        private readonly SalesDBContext _context;

        public SalesProductsController(SalesDBContext context)
        {
            _context = context;
        }

        // GET: SalesProducts
        public async Task<IActionResult> Index()
        {
              return View(await _context.SalesProducts.ToListAsync());
        }

        // GET: SalesProducts/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.SalesProducts == null)
            {
                return NotFound();
            }

            var salesProducts = await _context.SalesProducts
                .FirstOrDefaultAsync(m => m.Id == id);
            if (salesProducts == null)
            {
                return NotFound();
            }

            return View(salesProducts);
        }

        // GET: SalesProducts/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: SalesProducts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,ProductName,Qty")] SalesProducts salesProducts)
        {
            if (ModelState.IsValid)
            {
                _context.Add(salesProducts);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(salesProducts);
        }

        // GET: SalesProducts/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.SalesProducts == null)
            {
                return NotFound();
            }

            var salesProducts = await _context.SalesProducts.FindAsync(id);
            if (salesProducts == null)
            {
                return NotFound();
            }
            return View(salesProducts);
        }

        // POST: SalesProducts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,ProductName,Qty")] SalesProducts salesProducts)
        {
            if (id != salesProducts.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(salesProducts);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!SalesProductsExists(salesProducts.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(salesProducts);
        }

        // GET: SalesProducts/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.SalesProducts == null)
            {
                return NotFound();
            }

            var salesProducts = await _context.SalesProducts
                .FirstOrDefaultAsync(m => m.Id == id);
            if (salesProducts == null)
            {
                return NotFound();
            }

            return View(salesProducts);
        }

        // POST: SalesProducts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.SalesProducts == null)
            {
                return Problem("Entity set 'SalesDBContext.SalesProducts'  is null.");
            }
            var salesProducts = await _context.SalesProducts.FindAsync(id);
            if (salesProducts != null)
            {
                _context.SalesProducts.Remove(salesProducts);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool SalesProductsExists(int id)
        {
          return _context.SalesProducts.Any(e => e.Id == id);
        }
    }
}
