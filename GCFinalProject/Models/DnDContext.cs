using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GCFinalProject.Models
{
    public partial class DnDContext : DbContext
    {
        public DnDContext()
        {
        }

        public DnDContext(DbContextOptions<DnDContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Character> Characters { get; set; } = null!;
        public virtual DbSet<Favorite> Favorites { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.

                // optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=DnD;Trusted_Connection=True;");

                optionsBuilder.UseSqlServer("Server=tcp:gcfinalproject.database.windows.net,1433;Initial Catalog=DnD;Persist Security Info=False;User ID=GCFinal;Password=RyanPrestonL0ganAdam;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Character>(entity =>
            {
                entity.HasKey(e => e.PkId)
                    .HasName("PK__Characte__40A359C306DEA5A2");

                entity.ToTable("Character");

                entity.Property(e => e.PkId).HasColumnName("pkId");

                entity.Property(e => e.Class).HasMaxLength(40);

                entity.Property(e => e.Subclass).HasMaxLength(40);
            });

            modelBuilder.Entity<Favorite>(entity =>
            {
                entity.HasKey(e => e.PkId)
                    .HasName("PK__Favorite__40A359C321367FF2");

                entity.Property(e => e.PkId).HasColumnName("pkId");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.UserId)
                    .HasMaxLength(40)
                    .HasColumnName("UserID");

                entity.HasOne(d => d.IdNavigation)
                    .WithMany(p => p.Favorites)
                    .HasForeignKey(d => d.Id)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Favorites__id__66603565");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserName).HasMaxLength(25);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
