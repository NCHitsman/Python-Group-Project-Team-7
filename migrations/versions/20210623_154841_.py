"""empty message

Revision ID: 4a10df1251af
Revises: ffdc0a98111c
Create Date: 2021-06-23 15:48:41.627289

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4a10df1251af'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        'teams',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('short_name', sa.String(), nullable=False),
        sa.Column('conference', sa.String(), nullable=False),
        sa.Column('shares', sa.Integer(), nullable=False),
        sa.Column('price', sa.Float(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('short_name')
    )
    op.create_table(
        'events',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('date', sa.Date(), nullable=False),
        sa.Column('winner_id', sa.Integer(), nullable=False),
        sa.Column('winner_score', sa.Integer(), nullable=False),
        sa.Column('loser_id', sa.Integer(), nullable=False),
        sa.Column('loser_score', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['loser_id'], ['teams.id'], ),
        sa.ForeignKeyConstraint(['winner_id'], ['teams.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table(
        'history',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('team_id', sa.Integer(), nullable=False),
        sa.Column('price', sa.Float(), nullable=False),
        sa.Column('date', sa.Date(), nullable=False),
        sa.ForeignKeyConstraint(['team_id'], ['teams.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table(
        'usershare',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('shares', sa.Integer(), nullable=True),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.Column('team_id', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['team_id'], ['teams.id'], ),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table(
        'watchlists',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('team_id', sa.Integer(), nullable=False),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['team_id'], ['teams.id'], ),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('watchlists')
    op.drop_table('usershare')
    op.drop_table('history')
    op.drop_table('events')
    op.drop_table('teams')
    # ### end Alembic commands ###
